import { useFirebaseIDSelect } from "./useIDSelect";
import { useFirebaseAllSelect } from "./useSelect";
import { useFirebaseInsert } from "./useCreat";
import { useFirebaseUpdate } from "./useUpdate";
import { useFirebaseDelete } from "./useDelete";

export const useFirebase = {
    useFirebaseAllSelect,
    useFirebaseIDSelect,
    useFirebaseInsert,
    useFirebaseUpdate,
    useFirebaseDelete

}