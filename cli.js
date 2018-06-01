const TailwindConverter = require('./build/TailwindConverter');
const yargs = require('yargs');
const async = require('async');
const through =  require('through2');
const split = require('split2');
const pumpify = require('pumpify');
const _  = require('lodash');

const fs = require('fs');
var path = require('path');
var argv = yargs
    .usage( "Usage: tailwindo <path/to/directory/>" )
    .command( "dir", "a file path/a folder path/Bootstrap CSS classes", { alias: "directory", type: "string"  } )
    .option( "r", { alias: "recursive", demand: false, describe: "Recursively convert a directory", type: "boolean"} )
    .option( "e", { alias: "extensions", demand: false, describe: "Convert different file extensions", type: "string",example:'php,html' } )
    .option( "p", { alias: "replace", demand: false, describe: "Overwrite the original files", type: "boolean" } )
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
                if (err.code === 'ENOTDIR' || err.code === 'EBUSY') filelist.push(dirFile);
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

        let filename = path.basename(arg);
        let file_comp =arg.split('.'); 
        let ext = file_comp.pop();
        file_comp.push('tw')
        file_comp.push(ext);
        let out_file = file_comp.join('.');

        let extensions = [];
        if(argv.e)
        {
            extensions = argv.e.split(',')
            if(!extensions.length)
            { 
                console.error("Empty extension list");
                process.exit();
            }
        }
        var output = fs.createWriteStream(out_file);
        input.pipe((function(){
            return pumpify(split(), through.obj(function(line, enc, cb){
                if(!line) return cb();
                var twline = converter.setContent(line).convert().get()+"\n";;
    
                if(!twline.trim()) return cb();
    
                cb(null, twline);
    
            }));
        })()).pipe(output)
            /**
             * replace files
             */
        if(argv.p)
        {
            output.on('finish',function(){
                fs.unlink(arg,function(err){
                    if (err) throw err;
                        fs.rename(out_file,arg,function (err) {
                            if (err) throw err;
                        });
                })
               
            })
        }
        
    }
    /**
     * 
     */
    else if(fs.existsSync(arg) && fs.lstatSync(arg).isDirectory())
    {
        if(argv.r)
        {
            var filelist = walkSync(arg);
        }
        else
        {
            let extensions = [];
            if(argv.e)
            {
                extensions = argv.e.split(',')
                if(!extensions.length)
                { 
                    console.error("Empty extension list");
                    process.exit();
                }
            }

            var filelist = [];
            fs.readdirSync(arg).forEach(file => {
                    let file_path = path.join(arg, file);
                    if(fs.existsSync(file_path) && fs.lstatSync(file_path).isFile())
                    {
                        if(_.includes(extensions,path.extname(file_path)))
                        {
                            filelist.push(file_path);
                        }
                    }
            });
        }
        
        if(!filelist.length){
            console.log("No file with matching extensions found");
            process.exit();
        }
    

        async.map(filelist, function(file){

            var input = fs.createReadStream(file);

            let file_comp = file.split('.'); 
            let ext = file_comp.pop();
            file_comp.push('tw')
            file_comp.push(ext);
            let out_file = file_comp.join('.');
        
            var output = fs.createWriteStream(out_file);
            input.pipe((function(){
                return pumpify(split(), through.obj(function(line, enc, cb){
                    if(!line) return cb();
                    var twline = converter.setContent(line).convert().get()+"\n";
        
                    if(!twline.trim()) return cb();
        
                    cb(null, twline);
        
                }));
            })())
            .pipe(output);
            /**
             * replace files
             */
            if(argv.p)
            {
                output.on('finish',function(){
                    fs.unlink(file,function(err){
                        if (err) throw err;
                            fs.rename(out_file,file,function (err) {
                                if (err) throw err;
                            });
                    })
                   
                })
            }

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