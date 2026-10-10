import {
  Building2,
  Car,
  Cloud,
  Factory,
  Landmark,
  Mountain,
  Snowflake,
  Thermometer,
  Trees,
  User,
  Waves,
  Wheat,
  Wind,
  Zap,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react';
import type { IconName } from '../../data/types';

const icons: Record<IconName, LucideIcon> = {
  thermometer: Thermometer,
  cloud: Cloud,
  waves: Waves,
  zap: Zap,
  factory: Factory,
  wheat: Wheat,
  car: Car,
  building: Building2,
  snowflake: Snowflake,
  mountain: Mountain,
  trees: Trees,
  wind: Wind,
  landmark: Landmark,
  user: User,
};

/** Rendert ein Icon aus den Inhaltsdaten. Dekorativ, daher aria-hidden. */
export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" focusable="false" {...props} />;
}
