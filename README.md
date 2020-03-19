



https://docs.npmjs.com/files/folders

Global npm folder: %AppData%\npm

Windows Command Protoc:

protoc -I=. ./protos/dummy.proto --js_out=import_style=commonjs,binary:./server --grpc_out=./server --plugin=protoc-gen-grpc=%AppData%/npm/grpc_tools_node_protoc_plugin.cmd


Mac/ Linux command Protoc:

    protoc -I=. ./protos/dummy.proto \
      --js_out=import_style=commonjs,binary:./server \
      --grpc_out=./server \
      --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`


