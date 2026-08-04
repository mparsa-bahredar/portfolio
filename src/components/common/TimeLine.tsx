type TimelineItem = {
  title: string;
  subtitle?: string;
  date?: string;
};

type TimelineProps = {
  items: TimelineItem[];
};


const Timeline = ({ items }: TimelineProps) => {

  return (
    <div className="w-full mx-auto max-w-5xl py-10 relative">
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[#E4E4E4]   dark:bg-[#0D3C61]"/>
      <div className="space-y-10">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center relative ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
            <div className="h-5 w-5 bg-[#E4E4E4] -translate-x-1/2 rounded-full absolute left-1/2 z-10   dark:bg-[#0D3C61]"/>
            <div className="w-[calc(50%-2rem)] p-5 bg-[#FFFFFF] rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.04)]   dark:bg-[#0D3C61]">
              <h3 className="text-lg font-bold text-[#262626]   dark:text-[#F5F5F5]">{item.title}</h3>
              {item.subtitle && (
                <p className="mt-2 text-sm text-[#262626]   dark:text-[#F5F5F5]">{item.subtitle}</p>
              )}
              {item.date && (
                <span className="mt-2 block text-xs text-[#525252]   dark:text-[#E4E4E4]">
                  {item.date}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;