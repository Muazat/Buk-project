export const useAppLoader = ref<Boolean>(false);
export const useAppLoaderText = ref<String>("Loading...");
export const useSetAppLoader = (
  status: Boolean,
  text: String = "Loading..."
) => {
  useAppLoader.value = status;
  useAppLoaderText.value = text;
};

export const useAppAlert = ref<Boolean>(false);
export const useAppAlertText = ref<String>("This is an alert");
export const useAppAlertType = ref<String>("success");
export const useSetAppAlert = (
  status: Boolean,
  text: String = "This is an alert",
  type: String = "success"
) => {
  useAppAlert.value = status;
  useAppAlertText.value = text;
  useAppAlertType.value = type;
};

export const useSaveData = (blob: Blob, fileName: string) => {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
