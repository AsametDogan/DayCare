import { AppThunk } from "@/src/store";
import { ModalSlice } from "@/src/store/slices/modalSlice";
import { apiConfig } from "@/src/utils/apiConfig";
import axiosInstance from "@/src/utils/axios-interceptor";

export const getLessons =
  (): AppThunk =>
  async (dispatch): Promise<void> => {
    try {
      const body = {};

      const response: any = await axiosInstance.post(
        `${apiConfig.baseURL}${apiConfig.endpoints.lesson.getLessons}`,
        body
      );

      //gelen responsa göre müdahale slice store et

      //örnek slice kullanımı

      dispatch(
        ModalSlice.actions.openModal({
          message: response.data.message,
          modalType: "info",
          title: "Uyarı",
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
