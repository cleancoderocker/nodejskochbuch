#include <nan.h>
#include <stdio.h>

namespace example
{
using namespace v8;
using Nan::GetFunction;
using Nan::New;
using Nan::Set;
using Nan::ThrowError;
using Nan::Utf8String;

NAN_METHOD(printString)
{
	if (!info[0]->IsString())
	{
		return ThrowError("Parameter must be a string");
	}
	Utf8String path(info[0]);
	printf("Inside C++: %s\n", *path);
}

NAN_MODULE_INIT(InitAll)
{
	NAN_EXPORT(target, printString);
}

NODE_MODULE(module, InitAll)

} // namespace example