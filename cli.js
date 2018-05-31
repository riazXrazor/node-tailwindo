const TailwindConverter = require('./build/TailwindConverter');
const yargs = require('yargs');
const async = require('async');
const through =  require('through2');
const split = require('split2');
const pumpify = require('pumpify');

const fs = require('fs');
var path = require('path');
var argv = yargs
    .usage( "Usage: tailwindo <path/to/directory/>" )
    .command( "dir", "a file path/a folder path/Bootstrap CSS classes", { alias: "directory", type: "string"  } )
    .option( "r", { alias: "recursive", demand: false, describe: "Recursively convert a directory", type: "string" } )
    .option( "e", { alias: "extensions", demand: false, describe: "Convert different file extensions", type: "string",example:'php,html' } )
    .option( "re", { alias: "replace", demand: false, describe: "Overwrite the original files", type: "string" } )
    .help( "?" )
    .alias( "?", "help" )
    .epilog( "By Riaz Ali Laskar" )
    .argv;

    const arg = argv._[ 0 ];
    const converter = new TailwindConverter();
    
    // List all files in a directory in Node.js recursively in a synchronous fashion
    function walkSync (dir, filelist = []) {
        fs.readdirSync(dir).forEach(file => {
            var dirFile = path.join(dir, file);
            try {
                filelist = walkSync(dirFile, filelist);
            }
            catch (err) {
                if (err.code === 'ENOTDIR' || err.code === 'EBUSY') filelist = [...filelist, dirFile];
                else throw err;
            }
        });
        return filelist;
    }

/**
 * 
 */
    if(fs.existsSync(arg) && fs.lstatSync(arg).isFile())
    {
        var input = fs.createReadStream(arg);

        let file_comp =arg.split('.'); 
        let ext = file_comp.pop();
        file_comp.push('tw')
        file_comp.push(ext);

        var output = fs.createWriteStream(file_comp.join('.'));

        input.pipe((function(){
            return pumpify(split(), through.obj(function(line, enc, cb){
                if(!line) return cb();
                var twline = converter.setContent(line).convert().get()+"\n";;
    
                if(!twline.trim()) return cb();
    
                cb(null, twline);
    
            }));
        })()).pipe(output)
        
    }
    /**
     * 
     */
    else if(fs.existsSync(arg) && fs.lstatSync(arg).isDirectory())
    {
        var filelist = walkSync(arg);
        async.map(filelist, function(file){

            var input = fs.createReadStream(file);

            let file_comp = file.split('.'); 
            let ext = file_comp.pop();
            file_comp.push('tw')
            file_comp.push(ext);

            var output = fs.createWriteStream(file_comp.join('.'));

            input.pipe((function(){
                return pumpify(split(), through.obj(function(line, enc, cb){
                    if(!line) return cb();
                    var twline = converter.setContent(line).convert().get()+"\n";
        
                    if(!twline.trim()) return cb();
        
                    cb(null, twline);
        
                }));
            })())
            .pipe(output)

        }, function(err, results) {
            if(err) return console.error(err);
        });
    }
    else
    {
        /**
         * 
         */
        console.log(converter.setContent(arg.toString()).convert().get())
    }