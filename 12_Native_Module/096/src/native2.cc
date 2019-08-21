#include <node_api.h>

napi_value createPerson(napi_env env, const napi_callback_info info)
{
	// N-API-Statuscode definieren
	napi_status status = napi_generic_failure;

	size_t argc = 3;
	napi_value args[3];

	// N-API-Statuscode aktualisieren
	status = napi_get_cb_info(env, info, &argc, args, NULL, NULL);
	// N-API-Statuscode überprüfen
	if (status != napi_ok) {
		napi_throw_error(env, NULL, "Could not get callback info.");
	}

	napi_value person;
	status = napi_create_object(env, &person);
	if (status != napi_ok) {
		napi_throw_error(env, NULL, "Could not create person object.");
	}
	status = napi_set_named_property(env, person, "firstName", args[0]);
	if (status != napi_ok) {
		napi_throw_error(env, NULL, "Could not define property 'firstName'.");
	}
	status = napi_set_named_property(env, person, "lastName", args[1]);
	if (status != napi_ok) {
		napi_throw_error(env, NULL, "Could not define property 'lastnName'.");
	}
	status = napi_set_named_property(env, person, "age", args[2]);
	if (status != napi_ok) {
		napi_throw_error(env, NULL, "Could not define property 'age'.");
	}

	napi_value global;
	status = napi_get_global(env, &global);
	if (status != napi_ok) {
		napi_throw_error(env, NULL, "Could not get global object'.");
	}

	napi_deferred deferred;
	napi_value promise;
	status = napi_create_promise(env, &deferred, &promise);
	if (status != napi_ok) {
		napi_throw_error(env, NULL, "Could not create promise.");
	}

	status = napi_resolve_deferred(env, deferred, person);

	return promise;
}

napi_value Init(napi_env env, napi_value exports)
{
	napi_value createPersonFunction;
	napi_create_function(env, NULL, NAPI_AUTO_LENGTH, createPerson, NULL, &createPersonFunction);
	napi_set_named_property(env, exports, "createPerson", createPersonFunction);
	return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)