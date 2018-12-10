import { BaseResponse } from "./base-response";
import { ImageSet } from "./image-set";

export class ImageLocationsResponse extends BaseResponse {
    imageSet: ImageSet[];
}