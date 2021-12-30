import axios from "axios";
import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/utils/endpoints";

export const fetchBanners = () => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_SITE_URL}/${API_ENDPOINTS.BANNERS}`)
    .then((res) => res?.data);
};

export function useBannerQuery() {
  return useQuery(API_ENDPOINTS.BANNERS, fetchBanners);
}
