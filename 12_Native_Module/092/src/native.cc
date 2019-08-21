#include <node_api.h>
#include <stdio.h>

napi_value printString(napi_env env, const napi_callback_info info)
{
	napi_value args[1];
	size_t argc = 1;

	napi_get_cb_info(env, info, &argc, args, NULL, NULL);

	char str[1024];
	size_t str_len;

	if (napi_get_value_string_utf8(env, args[0], (char *)&str, 1024, &str_len) != napi_ok)
	{
		napi_throw_error(env, "EINVAL", "Parameter must be a string");
		return NULL;
	}

	printf("Inside C: %s\n", str);

	return NULL;
}

napi_value init_all(napi_env env, napi_value exports)
{
	napi_value print_fn;
	napi_create_function(env, NULL, 0, printString, NULL, &print_fn);
	napi_set_named_property(env, exports, "printString", print_fn);
	return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, init_all)