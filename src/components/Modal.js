import { format } from 'date-fns';
import React from 'react'
import { AiOutlineLike } from 'react-icons/ai';
import { HiDownload } from 'react-icons/hi';
import { IoIosShareAlt } from 'react-icons/io';

const Modal = ({ Photos }) => {
    const { id, urls, user, created_at, likes, description } = Photos;

    

    return (
        <>
            <input type="checkbox" id="unsplash-modal" className="modal-toggle modal" />
            <div className="modal opacity-90">
                <div className="w-50 h-50">
                    <label htmlFor="unsplash-modal" className="btn btn-sm btn-circle absolute lg:right-72 lg:top-10">✕</label>
                            <img
                        src={urls.full}
                        alt={user.username}
                        className="modal-image"
                    />
                    <div className="p-5 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between bg-slate-50">
                        <article className="flex items-center justify-start mb-5 shadow-lg p-4 rounded-md">
                            <img
                                src={user.profile_image.medium}
                                alt={user.username}
                                className="rounded-full mr-2 w-10 md:w-auto delay-1000"
                            />
                                <ul>
                                    <li className="text-slate-800 font-bold">{user.name}</li>
                                    <li className="text-sm text-slate-800 opacity-75">
                                        {format(new Date(created_at), "dd MMMM yyyy")}
                                    </li>

                                    <p>{description}</p>
                                </ul>
                        </article>
                        <article className="mt-5 md:mt-0">
                            <div className='flex'>
                            <a href={Photos?.link?.download} className="cursor-pointer"><HiDownload size={30}className=""/></a>
                            <a href={Photos?.link?.download} className="ml-4 cursor-pointer"><IoIosShareAlt size={30}/></a>
                            </div>
                        </article>
                        <article className="mt-5 md:mt-0">
                            <div>
                                <a
                                    href={`https://instagram.com/${user.instagram_username}`}
                                    className="text-sm text-slate-800 opacity-75 underline"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {user.instagram_username}
                                </a>
                            </div>
                            <small className="flex items-center  text-slate-800 opacity-75 cursor-pointer">
                                <AiOutlineLike className="mr-1" size={25} /> {likes}
                            </small>
                        </article>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal