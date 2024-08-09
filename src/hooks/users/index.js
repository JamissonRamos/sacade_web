import { useAllRegistrations } from "./useAllSelect";
import { useDelete } from "./useDelete";
import { useIDRegistrations } from "./useIDSelect";
import { useCreateUser } from "./useInsert";
import { useUpdate } from "./useUpdate";


export const useUsers = {
    useAllRegistrations,
    useIDRegistrations,
    useCreateUser,
    useUpdate,
    useDelete
}