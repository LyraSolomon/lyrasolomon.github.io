#!/bin/sh
runhaskell engine/Engine.hs
cd build
python -m SimpleHTTPServer 4000
