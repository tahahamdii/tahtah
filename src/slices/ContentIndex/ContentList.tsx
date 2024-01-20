import { Content } from '@prismicio/client'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md';

type ContentListProps ={
    items : Content.BlogPostDocument[] | Content.ProjectsDocument[];
    contentType: Content.ContentIndexSlice["primary"]["content_type"];
    fallbackItemImage : Content.ContentIndexSlice["primary"]["fallback_item_image"];
    viewMoreText : Content.ContentIndexSlice["primary"]["view_more_text"];

}

export default function ContentList ({
    items,
    contentType, 
    fallbackItemImage,
    viewMoreText = "Read more",
}: ContentListProps)  {
  return (
    <div>
        <ul className='grid border-b border-b-slate-900'>
            {items.map((item,index)=>(
                <li key={index} className='list-item opacity-0f'>
                <a href="" 
                className='flex flex-col justify-between border-t border-t-slate-600 py-10 text-slate-700 md:flex-row'>
                    <div className='flex flex-col'>
                        <span className='text-3xl font-bold'>{item.data.title}</span>
                        <div className='flex gap-3 text-red-500 text-lg font-bold'>
                            {item.tags.map((tag,index)=>(
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                    </div>
                    <span className='ml-auto flex items-center gap-2 text-xl font-medium md:ml-0'>
                        {viewMoreText}<MdArrowOutward/>
                        </span>
                </a>
            </li>
            ))}
            
        </ul>
    </div>
  );
}
