# Loopline Systems API Documenation

Welcome to the [Loopline Systems](http://www.loopline-systems.com) REST API specification.

For the full Documenation refer to: [http://developer.loopline-systems.com](http://developer.loopline-systems.com)

Your opinion is important! If you have any suggestions how we can improve our API to fit better to your needs, just feel free to contact us: support(at)loopline-systems(dot)com.

### Usage

For using the API, you need a &lt;CLIENT_ID&gt; and an &lt;API-KEY&gt; which you can receive both in your admin section.

All data sent and received uses the MIME_TYPE `application/json`.

API Base URL: `https://api.loopline-systems.com`

Example cURL request: `curl https://api.loopline-systems.com/users -X GET -H "X-Api-Client: <CLIENT_ID>" -H "X-Api-Key: <API_KEY>"`

! Each Endpoint description will contain Sample Requests and Reponses as well.


### Error handling

If errors occur while communicating with the API you will receive an error, including the HTTP status-code and a message.

### Sandbox

Loopline Systems supports the Postman extension for Chrome with a request collection you can easily import. If you are not familiar with it, just have a look at our [tutorial](http://developer.loopline-systems.com/chrome_postman.html).

