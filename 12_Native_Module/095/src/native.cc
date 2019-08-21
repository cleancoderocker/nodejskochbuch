#include <node_api.h>

napi_value createPerson(napi_env env, const napi_callback_info info)
{
	// Parameter ermitteln
	size_t argc = 3;
	napi_value args[3];
	napi_get_cb_info(env, info, &argc, args, NULL, NULL);

	// Person-Objekt erstellen
	napi_value person;
	napi_create_object(env, &person);

	// Eigenschaften definieren
	napi_set_named_property(env, person, "firstName", args[0]);
	napi_set_named_property(env, person, "lastName", args[1]);
	napi_set_named_property(env, person, "age", args[2]);

	// Globales Objekt ermitteln
	napi_value global;
	napi_get_global(env, &global);

	// Deferred-Objekt und Promise erstellen
	napi_deferred deferred;
	napi_value promise;
	napi_create_promise(env, &deferred, &promise);

	// Promise resolven
	napi_resolve_deferred(env, deferred, person);

	// Alternativ: Promise rejecten
	// napi_value message;
  	// napi_create_string_utf8(env, "Cannot create person", NAPI_AUTO_LENGTH, &message);
	// napi_reject_deferred(env, deferred, message);
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