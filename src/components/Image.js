import { format } from "date-fns"
import { FcLike } from 'react-icons/fc';

const Image = ({ data, setPhotos }) => {
  const { id, urls, user, created_at, likes } = data;
  console.log(data);
  return (
    <>
      <div className="p-2 rounded-3xl shadow-md bg-white">
        <article key={id} className="rounded-3xl">
          <label onClick={()=>{setPhotos(data)}}
           htmlFor="unsplash-modal" className="cursor-pointer">
            <img
              src={urls.regular}
              alt={user.username}
              className="h-52 object-fit object-cover w-full lg:h-80 rounded-3xl"
              />
              </label>
          <div className="p-5 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between">
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
                <FcLike className="mr-1" size={25} /> {likes}
              </small>
            </article>
          </div>
        </article>
      </div>
    </>
  )
}

export default Image;