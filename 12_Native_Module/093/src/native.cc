#include <node_api.h>

napi_value createPerson(napi_env env, const napi_callback_info info)
{
	// Person-Objekt erstellen
	napi_value person;
	napi_create_object(env, &person);

	// Werte für die Eigenschaften erstellen
	napi_value firstName;
	napi_value lastName;
	napi_value age;
	napi_value phone;
	napi_value email;

	napi_create_string_utf8(env, "Max", NAPI_AUTO_LENGTH, &firstName);
	napi_create_string_utf8(env, "Mustermann", NAPI_AUTO_LENGTH, &lastName);
	napi_create_int32(env, 45 &age);
	napi_create_string_utf8(env, "0123/1234567", NAPI_AUTO_LENGTH, &phone);
	napi_create_string_utf8(env, "maxmustermann@nodejskochbuch.de", NAPI_AUTO_LENGTH, &email);

	// Eigenschaften definieren
	napi_set_named_property(env, person, "firstName", firstName);
	napi_set_named_property(env, person, "lastName", lastName);
	napi_set_named_property(env, person, "age", age);

	// Kontakt-Objekt erstellen
	napi_value contact;
	napi_create_object(env, &contact);

	// Eigenschaften definieren
	napi_set_named_property(env, contact, "phone", phone);
	napi_set_named_property(env, contact, "email", email);

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