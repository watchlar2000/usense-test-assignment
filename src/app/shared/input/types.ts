type LabelConfig = {
  label: string;
  for: string;
  classLabel?: string;
};

type InputConfig = {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  classInput?: string;
};

export type Config = InputConfig & LabelConfig;
