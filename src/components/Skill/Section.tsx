import Tile, { TileProps } from "./Tile";

export interface SectionProps {
  heading: string;
  data: TileProps[][];
}

const Section = ({ heading, data }: SectionProps) => {
  return (
    <section className="mb-4">
      <h3 className="text-lg font-bold text-center mt-4 mb-6">{heading}</h3>
      <div className={`grid grid-rows-${data.length} gap-6`}>
        {data.map((row, i) => {
          return (
            <div className="flex gap-6 justify-center" key={i}>
              {row.map(({ label, icon }, j) => (
                <Tile label={label} icon={icon} key={`${i}${j}`} />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
