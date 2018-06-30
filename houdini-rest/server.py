#
# This is a Test Server Setup it shouldn't be run on a public server BAD IDEA!!!
#
#

from BaseHTTPServer import HTTPServer
from CGIHTTPServer import CGIHTTPRequestHandler
from BaseHTTPServer import BaseHTTPRequestHandler
import json, sys, datetime

hostname = 'localhost'
port = 8000

try:
    import hou
except ImportError:
    print 'There is a Problem in the File: server.py please edit the path to houdini installation'
    sys.path.append("C:\\Program Files\\Side Effects Software\\Houdini 14.0.441\\houdini\\python2.7libs")
    import hou


class HIPLoader(object):
    def run_Hip(self, data):
        print 'Data: ' + data
        print "Load Houdini File Time: \t%s" % datetime.datetime.now()
	    # load hip File
        hip_file = "test.hipnc"
        hou.hipFile.load(hip_file)
        #
        print "Load Data Time: \t\t%s" % datetime.datetime.now()
        hou.session.init(data)
        #
        print "Start Export Time: \t\t%s" % datetime.datetime.now()
        hou.session.render()
        print "End Time: \t\t\t%s" % datetime.datetime.now()


class MyRequestHandler(CGIHTTPRequestHandler):

    def do_GET(self):
        if self.path[0:4] == "/hou":
            print 'Full Path: ' + self.path
            path = str(self.path)
            tulpe = path.split("/")
            print 'Created Tulpe: ' + str(tulpe)
            #HIPLoader.run_Hip(tulpe)
            hip =  HIPLoader()
            hip.run_Hip(path[5:])
            # send response code:
            self.send_response(200)
            # send headers:
            self.send_header("Content-type:", "text/html")
            # send a blank line to end headers:
            self.wfile.write("\n")
            # send response:
            json.dump("update", self.wfile)

        # This is a custom command to close this testserver
        elif self.path[0:6] == "/close":
            print "close server"
            server.shutdown()
            sys.exit(1)

        else:
            """Serve a GET request."""
            f = self.send_head()
            if f:
                self.copyfile(f, self.wfile)
                f.close()

print '========================'
print 'Server: ' + str(hostname) + ':' + str(port)
print '========================\n'

handler = CGIHTTPRequestHandler
handler.cgi_directories = ['/cgi-bin', '/htbin']  # this is the default
server = HTTPServer((hostname, port), MyRequestHandler)
server.serve_forever()