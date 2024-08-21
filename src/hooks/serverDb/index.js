import { useServerDbIDSelect } from "./useIDSelect";
import { useServerDbAllSelect } from "./useSelect";
import { useServerDbInsert } from "./useCreat";
import { useServerDbUpdate } from "./useUpdate";
import { useServerDbDelete } from "./useDelete";

export const useServeDb = {
    useServerDbAllSelect,
    useServerDbIDSelect,
    useServerDbInsert,
    useServerDbUpdate,
    useServerDbDelete

}