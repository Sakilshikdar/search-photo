import { hover } from '@testing-library/user-event/dist/hover';
import { format } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai';
import share from './share';

const Modal = ({ Photos }) => {
    const { id, urls, user, created_at, likes, description } = Photos;

    

    return (
        <>
            <input type="checkbox" id="unsplash-modal" className="modal-toggle modal" />
            <div className="modal opacity-90">
                <div className="w-1/2 h-11/12">
                    <label htmlFor="unsplash-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <img
                        src={urls.full}
                        alt={user.username}
                        className="modal-image"
                    />
                    <div className="p-5 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between bg-slate-50">
                        <article className="flex items-center justify-start">
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
                            <small className="flex items-center  text-slate-800 opacity-75">
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