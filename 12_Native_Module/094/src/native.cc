#include <node_api.h>
#include <stdio.h>

napi_value simpleCallback(napi_env env, const napi_callback_info info)
{
  // Callback-Funktion ermitteln
  size_t argc = 1;
  napi_value args[1];
  napi_get_cb_info(env, info, &argc, args, NULL, NULL);
  napi_value callback = args[0];

  // String-Variable erzeugen
  napi_value argv[1];
  napi_create_string_utf8(env, "Hello World from native module", NAPI_AUTO_LENGTH, argv);

  // Globales Objekt ermitteln
  napi_value global;
  napi_get_global(env, &global);

  printf("Before calling callback\n");
  napi_value result;
  napi_call_function(
    env,      // Umgebung
    global,   // this-Objekt
    callback, // aufzurufende Funktion
    1,        // Anzahl der Argumente
    argv,     // Argumente als Array
    &result   // Ergebnis-Objekt
  );
  printf("After calling callback\n");

  return NULL;
}

napi_value Init(napi_env env, napi_value exports)
{
    napi_value callback_fn;
    napi_create_function(env, NULL, NAPI_AUTO_LENGTH, simpleCallback, NULL, &callback_fn);
    napi_set_named_property(env, exports, "simpleCallback", callback_fn);
    return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)