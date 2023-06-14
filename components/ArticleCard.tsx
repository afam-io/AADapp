import Link from 'next/link'
import React from 'react'

const ArticleCard = ({ article }) => {
    
    return (
        <div key={article.uid} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div className='flex justify-center m-2'>
                    <img alt="Placeholder" className="h-80 w-auto rounded-md" src={article.image} />                          
                </div>

                <div className='m-2 border-2 rounded-md'>
                    <header className="flex justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <a className="no-underline hover:underline" href="#">
                                {article.title}
                            </a>
                        </h1>
                        <p className="text-grey-darker text-sm">
                            {article.date}
                        </p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <a className="flex items-center no-underline hover:underline" href="#">
                            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                            <p className="ml-2 text-sm">
                                {article.author}
                            </p>
                        </a>
                    </footer>  
                </div>
                {/* Open the modal using ID.showModal() method */}
                <dialog id="my_modal_5" className="modal">
                    <div className='modal-box flex justify-center'>
                        <div className=''>
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                        </div>
                    </div>
                </dialog>
                <button className="btn" onClick={()=>document.getElementById("my_modal_5").showModal()}>open modal</button>
        </div>
    )
}

export default ArticleCard