#include <node.h>

namespace example
{

using v8::Exception;
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void printString(const FunctionCallbackInfo<Value> &args)
{
	Isolate *isolate = args.GetIsolate();

	if (!args[0]->IsString())
	{
		isolate->ThrowException(Exception::TypeError(
			String::NewFromUtf8(isolate, "Parameter must be a string")));
		return;
	}

	String::Utf8Value s(args[0]);
	std::string message(*s);
	printf("Inside C++: %s\n", message.c_str());
}

void InitAll(Local<Object> exports)
{
	NODE_SET_METHOD(exports, "printString", printString);
}

NODE_MODULE(module, InitAll)

} // namespace example