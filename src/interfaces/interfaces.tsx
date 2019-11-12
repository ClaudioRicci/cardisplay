export interface CarData {
  isLoading: boolean;
  cars: [];
  error: any;
}

export interface CarProps {
  id: number;
  make: string;
  model: string;
  img_url: string;
  rrp: number;
  carwow_rating: number;
  label: string;
  summary: string;
  buttonType: string;
  link: string;
  title: string;
}
