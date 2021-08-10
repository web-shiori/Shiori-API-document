/**
* Web-Shiori API
* Web-Shiori API document
*
* OpenAPI spec version: 1.0.0
* Contact: shiori.web.forsafari@gmail.com
*
* NOTE: This class is auto generated by the swagger code generator program.
* https://github.com/swagger-api/swagger-codegen.git
* Do not edit the class manually.
*/
package io.swagger.server

import io.ktor.application.ApplicationCall
import io.ktor.http.HttpMethod
import io.ktor.locations.*
import io.ktor.pipeline.PipelineContext
import io.ktor.routing.Route
import io.ktor.routing.method
import io.swagger.server.models.*


// NOTE: ktor-location@0.9.0 is missing extension for Route.delete. This includes it.
inline fun <reified T : Any> Route.delete(noinline body: suspend PipelineContext<Unit, ApplicationCall>.(T) -> Unit): Route {
    return location(T::class) {
        method(HttpMethod.Delete) {
            handle(body)
        }
    }
}

object Paths {
}
