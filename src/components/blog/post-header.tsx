import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

import { type Author } from "@/interfaces/author";
import { PostTitle } from "./post-title";

type Props = {
  title: string;
  coverImage?: string;
  date?: string;
  author?: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        {author && (
          <Avatar name={author.name} picture={author.picture} boldy={true} />
        )}
      </div>
      {coverImage && (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
      )}
      <div className="max-w-3xl">
        {author && (
          <div className="block md:hidden mb-6 text-rigth">
            <Avatar name={author.name} picture={author.picture} boldy={true} />
          </div>
        )}
      </div>
      <div className="max-w-3xl">
        {date && (
          <div className="mb-6 text-lg font-bold">
            <DateFormatter dateString={date} />
          </div>
        )}
      </div>
    </>
  );
}
