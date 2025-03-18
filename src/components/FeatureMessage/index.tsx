import React from "react";

interface FeatureMessageProps {
  title: string;
  description: string;
  subtitle: string;
}

const FeatureMessage: React.FC<FeatureMessageProps> = (props) => {
  const { title, description, subtitle } = props;
  return (
    <div className="py-4 mx-auto text-center flex flex-col items-center max-w-3xl">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
        {title}
        <span className="text-blue-600"> {subtitle}</span>
      </h1>
      <p className="mt-2 text-sm max-w-prose text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default FeatureMessage;
