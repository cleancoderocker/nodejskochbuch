#include <node_api.h>
#include <stdio.h>

napi_value createPerson(napi_env env, const napi_callback_info info)
{
	// Parameter und Callback-Funktion ermitteln
	size_t argc = 4;
	napi_value args[4];
	napi_get_cb_info(env, info, &argc, args, NULL, NULL);

	// Person-Objekt erstellen
	napi_value person;
	napi_create_object(env, &person);

	// Eigenschaften definieren
	napi_set_named_property(env, person, "firstName", args[0]);
	napi_set_named_property(env, person, "lastName", args[1]);
	napi_set_named_property(env, person, "age", args[2]);

	// Callback-Funktion ermitteln
	napi_value callback = args[3];

	// Globales Objekt ermitteln
	napi_value global;
	napi_get_global(env, &global);

	napi_value argv[1];
	argv[0] = person;

	napi_value result;
	napi_call_function(
		env,	  // Umgebung
		global,   // this-Objekt
		callback, // aufzurufende Funktion
		1,		  // Anzahl der Argumente
		argv,	  // Argumente als Array
		&result   // Ergebnis-Objekt
	);

	return NULL;
}

napi_value Init(napi_env env, napi_value exports)
{
	napi_value callback_fn;
	napi_create_function(env, NULL, NAPI_AUTO_LENGTH, createPerson, NULL, &callback_fn);
	napi_set_named_property(env, exports, "createPerson", callback_fn);
	return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)