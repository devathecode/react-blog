import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Blogcard from "../../../../shared/components/Blogcard/Blogcard";

const Postblog = () => {
    const modules = {
        toolbar: [
            [{font: []}],
            [{header: [1, 2, 3, 4, 5, 6, false]}],
            ["bold", "italic", "underline", "strike"],
            [{color: []}, {background: []}],
            [{script: "sub"}, {script: "super"}],
            ["blockquote", "code-block"],
            [{list: "ordered"}, {list: "bullet"}],
            [{indent: "-1"}, {indent: "+1"}, {align: []}],
            ["link", "image", "video"],
            ["clean"],
        ],
    };
    const [value, setValue] = useState('');
    const createMarkup = () => {
        return {__html: value};
    }
    return (
        <div className="max-w-6xl mx-auto p-10">
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12 px-3">
                    <h1 className="text-color-one font-bold text-4xl">Post your blog</h1>
                </div>
                <div className="col-span-9 border-r border-gray-200 p-3 flex flex-col">
                    <ReactQuill className="h-72" theme="snow" modules={modules} value={value} onChange={setValue}/>
                </div>
                <div className="col-span-3 p-3">
                    <Blogcard/>
                </div>
                <div className="col-span-12 px-3">
                    <button className="bg-color-one text-white rounded font-bold w-24 py-1">
                        Add post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Postblog;
