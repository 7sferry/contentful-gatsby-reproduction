/************************
 * Made by [MR Ferry™]  *
 * on Mei 2024          *
 ************************/

/**
 * using middleware for api
 */
import {GatsbyFunctionRequest, GatsbyFunctionResponse} from "gatsby";

export default function handler(req: GatsbyFunctionRequest<any>,
                                res: GatsbyFunctionResponse) {
    res.json({
        title: `I am TYPESCRIPT`,
        params: JSON.stringify(req.params),
        query: JSON.stringify(req.query)
        // req: JSON.stringify(req)
    })
}