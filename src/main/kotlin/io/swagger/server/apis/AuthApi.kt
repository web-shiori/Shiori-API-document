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
package io.swagger.server.apis

import com.google.gson.Gson
import io.ktor.application.call
import io.ktor.auth.UserIdPrincipal
import io.ktor.auth.authentication
import io.ktor.auth.basicAuthentication
import io.ktor.auth.oauth
import io.ktor.auth.OAuthAccessTokenResponse
import io.ktor.auth.OAuthServerSettings
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.locations.*
import io.ktor.response.respond
import io.ktor.response.respondText
import io.ktor.routing.*

import kotlinx.coroutines.experimental.asCoroutineDispatcher

import io.swagger.server.ApplicationAuthProviders
import io.swagger.server.Paths
import io.swagger.server.ApplicationExecutors
import io.swagger.server.HTTP.client
import io.swagger.server.infrastructure.ApiPrincipal
import io.swagger.server.infrastructure.apiKeyAuth

// ktor 0.9.x is missing io.ktor.locations.DELETE, this adds it.
// see https://github.com/ktorio/ktor/issues/288
import io.swagger.server.delete


fun Route.AuthApi() {
    val gson = Gson()
    val empty = mutableMapOf<String, Any?>()

    route("/v1/auth") {
        post {
            val exampleContentType = "application/json"
            val exampleContentString = """{
              "bytes": [
                123,
                125
              ],
              "empty": false
            }"""
            
            when(exampleContentType) {
                "application/json" -> call.respond(gson.fromJson(exampleContentString, empty::class.java))
                "application/xml" -> call.respondText(exampleContentString, ContentType.Text.Xml)
                else -> call.respondText(exampleContentString)
            }
        }
    }
    
}
