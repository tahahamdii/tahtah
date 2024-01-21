"use client";
import { Content, asImageSrc, isFilled } from '@prismicio/client'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { MdArrowOutward } from 'react-icons/md';

type ContentListProps = {
    items: Content.BlogPostDocument[] | Content.ProjectsDocument[];
    contentType: Content.ContentIndexSlice["primary"]["content_type"];
    fallbackItemImage: Content.ContentIndexSlice["primary"]["fallback_item_image"];
    viewMoreText: Content.ContentIndexSlice["primary"]["view_more_text"];

}

export default function ContentList({
    items,
    contentType,
    fallbackItemImage,
    viewMoreText = "Read more",
}: ContentListProps) {

    const component = useRef(null);
    const revealRef = useRef(null);

    const [currentItem, setCurrentItem] = useState <null | number>(null);

    const lastMousePos = useRef({x: 0, y:0});

    const urlPrefixe = contentType === "Blog" ? "/blog" : "/projects";
    useEffect(()=>{
        const handleMouse = (c: MouseEvent) =>{
            const mousePos = {x: c.clientX, y:c.clientY + window.screenY};

            //calculate speed and direction 
            const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2))
            let ctx = gsap.context(()=>{
                if(currentItem !== null){
                    const maxY = window.scrollY + window.innerHeight - 350;
                    const maxX = window.innerWidth - 250 ;
                }
            })
        }
    })


    const contentImages = items.map((item)=>{
        const image = isFilled.image(item.data.hoverimage) ? item.data.hoverimage : fallbackItemImage;
        return asImageSrc(image, {
            fit: "crop",
            w: 220,
            h: 320,
            exp: -10,
        });
    });

    const onMouseEnter = (index : number) => {
        setCurrentItem(index)
    }
    const onMouseLeave = () => {
        setCurrentItem(null)
    }

    return (
        <div ref={component}>
            <ul className='grid border-b border-b-slate-100' onMouseLeave={onMouseLeave}>
                {items.map((item, index) => (
                    <>
                        {isFilled.keyText(item.data.title) && (
                            <li key={index} className='list-item opacity-0f'
                            onMouseEnter={() => onMouseEnter(index)}
                            >
                                <Link href={urlPrefixe + "/" + item.uid}
                                    className='flex flex-col justify-between border-t border-t-slate-600 py-10 text-slate-700 md:flex-row'
                                    aria-label={item.data.title}

                                >
                                    <div className='flex flex-col'>
                                        <span className='text-3xl font-bold'>{item.data.title}</span>
                                        <div className='flex gap-3 text-red-500 text-lg font-bold'>
                                            {item.tags.map((tag, index) => (
                                                <span key={index}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <span className='ml-auto flex items-center gap-2 text-xl font-medium md:ml-0'>
                                        {viewMoreText}<MdArrowOutward />
                                    </span>
                                </Link>
                            </li>
                        )}

                    </>
                ))}

            </ul>
            {/* {hover elemnt} */}
            <div 
            className='hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg  bg-cover bg-center opacity-0f transition-[background] duration-300'
            style={{
                backgroundImage : currentItem !== null ? `url(${contentImages[currentItem]})` : "",
            }}
            ref={revealRef}
            >
            
            
            
            </div>


        </div>
    );
}