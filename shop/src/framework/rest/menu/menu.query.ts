import axios from "axios";
import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/utils/endpoints";

export const fetchMenus = () => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_SITE_URL}/${API_ENDPOINTS.MENU}`)
    .then((res) => res?.data);
};

export function useMenuQuery() {
  return useQuery(API_ENDPOINTS.MENU, fetchMenus);
}
