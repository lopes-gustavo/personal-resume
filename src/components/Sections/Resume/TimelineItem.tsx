import Image from 'next/image';

import type { TimelineItemData } from '../../../data/dataDef';

const Chip = ({ value }: { value: string }) => (
  <div className="m-1 flex items-center justify-center rounded-full px-2 py-1 text-base font-medium border border-gray-400 select-none">
    <div className="max-w-full flex-initial text-xs font-normal leading-none">{value}</div>
  </div>
);

export const TimelineItem = ({ item }: { item: TimelineItemData }) => {
  const { title, dateStart, dateEnd, location, content, skills, url } = item;

  return (
    <div className="flex flex-col pb-8 text-left last:pb-0">
      <div className="flex gap-3 items-center pb-4 relative">
        <Image alt="" height={33} src={url} width={33} />

        <div className="flex flex-col justify-items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex items-center justify-center gap-x-2 md:justify-start">
            <span className="relative flex items-center gap-2">
              <span className="text-sm font-medium italic">{location}</span>
            </span>

            <span>•</span>

            <span className="flex-1 text-sm">
              {dateStart.format('MMM YYYY')} - {dateEnd?.format('MMM YYYY') || 'Current'}
            </span>
          </div>
        </div>
      </div>

      <div>
        <ul className="list-inside list-disc">{content?.map(e => <li key={e}>{e}</li>)}</ul>
      </div>

      <div className="flex flex-row flex-wrap mx-auto mt-3">{skills?.map(s => <Chip key={s} value={s} />)}</div>
    </div>
  );
};
