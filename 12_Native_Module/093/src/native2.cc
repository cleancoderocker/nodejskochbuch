#include <node_api.h>

napi_value createPerson(napi_env env, const napi_callback_info info)
{
	// Parameter extrahieren
	size_t argc = 5;
	napi_value args[5];
	napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

	// Person-Objekt erstellen
	napi_value person;
	napi_create_object(env, &person);

	// Eigenschaften definieren
	napi_set_named_property(env, person, "firstName", args[0]);
	napi_set_named_property(env, person, "lastName", args[1]);
	napi_set_named_property(env, person, "age", args[2]);

	// Kontakt-Objekt erstellen
	napi_value contact;
	napi_create_object(env, &contact);

	// Eigenschaften definieren
	napi_set_named_property(env, contact, "phone", args[3]);
	napi_set_named_property(env, contact, "email", args[4]);

	// Kontakt als Eigenschaft des Person-Objekts definieren
	napi_set_named_property(env, person, "contact", contact);

	// Person-Objekt zurückgeben
	return person;
}

napi_value Init(napi_env env, napi_value exports)
{
	napi_value createPersonFunction;
	napi_create_function(env, NULL, NAPI_AUTO_LENGTH, createPerson, NULL, &createPersonFunction);
	napi_set_named_property(env, exports, "createPerson", createPersonFunction);
	return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)