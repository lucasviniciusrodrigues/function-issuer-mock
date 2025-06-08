module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    let responseMessage;
    let status = 200;

    // Simula uma condição de erro 500 se o nome for 'error'
    if (name && name.toLowerCase() === 'error') {
        responseMessage = "An internal server error occurred.";
        status = 500;
        context.log.error(`Simulating a 500 error for name: ${name}`);
    } else {
        responseMessage = name
            ? "Hello, " + name + ". This HTTP triggered function executed successfully."
            : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    }

    context.res = {
        status: status,
        body: responseMessage
    };
}
