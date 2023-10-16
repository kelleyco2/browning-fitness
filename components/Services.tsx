import { IconType } from "../svgs/icons.constants";
import Grid from "./Grid";
import Icon from "./Icon";
import Section, { SectionVariants } from "./Section";

type ServiceList = {
  subheading: string;
  text: string;
  icon: IconType;
};

type ServicesProps = {
  mainHeading?: string;
  serviceList?: ServiceList[];
};

const mockServiceList = [
  {
    subheading: "Subheading 1",
    text: "Lorem ipsum doloret sum ex Lorem ipsum doloret sum ex ",
    icon: IconType.X,
  },
  {
    subheading: "Subheading 2",
    text: "Lorem ipsum doloret sum ex Lorem ipsum doloret sum ex ",
    icon: IconType.X,
  },
  {
    subheading: "Subheading 3",
    text: "Lorem ipsum doloret sum ex Lorem ipsum doloret sum ex ",
    icon: IconType.X,
  },
  {
    subheading: "Subheading 4",
    text: "Lorem ipsum doloret sum ex Lorem ipsum doloret sum ex ",
    icon: IconType.X,
  },
];

const Services = ({
  mainHeading,
  serviceList = mockServiceList,
}: ServicesProps) => {
  return (
    <Section variant={SectionVariants.LARGE} outerClassName="bg-grey4">
      {mainHeading && (
        <h2 className="font-f2 mb-10 lg:mb-16 text-center">{mainHeading}</h2>
      )}
      <Grid>
        {serviceList.map(({ subheading, text, icon }) => (
          <li
            key={subheading}
            className="flex flex-col items-center text-center mb-12 xl:mb-0 last-of-type:mb-0 max-w-[368px] xl:max-w-[253px]"
          >
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-primary mb-4">
              <div className="w-6 h-6">
                <Icon type={icon} className="fill-white" />
              </div>
            </div>
            <p className="font-base font-bold mb-2 lg:font-f4">{subheading}</p>
            <p className="font-sm">{text}</p>
          </li>
        ))}
      </Grid>
    </Section>
  );
};

export default Services;
