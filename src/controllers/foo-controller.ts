import {
    BaseHttpController,
    controller,
    httpGet,
    queryParam,
} from "inversify-express-utils";

@controller("/foo")
export class FooController extends BaseHttpController  {

    @httpGet("/")
    public async list(@queryParam("start") start: number, @queryParam("count") count: number) {
        const json = {
            count,
            headers: this.httpContext.request.headers,
            start,
        };

        console.log(json);

        return this.json(json);
    }
}
