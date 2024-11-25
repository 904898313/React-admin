import { Post } from "@/api/index.ts"

export const getImageCode = (params) => {
    return Post("system/authority/getImageCode",params)
}