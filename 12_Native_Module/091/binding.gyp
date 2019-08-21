{
  "targets": [{
    "target_name": "native",
    "sources": [
      "src/native.cc"
    ],
    "include_dirs": [
      "<!(node -e \"require('nan')\")",
    ]
  }]
}