import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
}

const SidepanelTitle = ({ icon, title }: Props) => {
  return (
    <div className="p-1 mb-3 flex items-center text-xl text-white">
      <div className="text-primary bg-white p-2 rounded-full flex items-center justify-center">{icon}</div>
      <h2 className="ml-3">{title}</h2>
    </div>
  );
};

export default SidepanelTitle;
