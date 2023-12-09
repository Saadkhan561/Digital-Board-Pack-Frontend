import React from "react";
import NewComment from "./new_comment";
import Comment from "./comments";
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
// const path = require('/images/saad_cv.docx')

const CardDetails = () => {
  // const docs = [
  //     { uri: require('/images/saad_cv.docx') } // Local File
  //   ];

  return (
    //   <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    <div className="w-full">
      <div className="p-4 mr-4 ml-4">
        <div className="flex justify-between items-center border-b-2 border-b-gray-300 pb-4">
          <div className="flex items-center gap-5">
            <div>
              <img
                className="rounded-full mob_screen:h-[50px] mob_screen:w-[50px]"
                src="/images/account.png"
                alt=""
                height={70}
                width={70}
              />
            </div>
            <div>
              <p className="text-2xl mob_screen:text-lg font-bold text-blue-600">
                Sales in January
              </p>
              <p className="text-md mob_screen:text-sm text-gray-500 font-semibold">
                Owner Name - 26 Nov 2023
              </p>
            </div>
          </div>
          <div>
            <img className="mob_screen:h-[20px] mob_screen:w-[20px]" src="/images/dots.png" alt="" height={25} width={25} />
          </div>
        </div>
        {/* DOCUMENT DIV */}
        <div className="items-center flex justify-between p-8 pb-4 border-b-2 border-b-gray-300">
          <div>
            <img className="mob_screen:h-[70px] mob_screen:w-[70px]" src="/images/word.png" alt="" height={100} width={100} />
          </div>
          <div>
            <img className="mob_screen:h-[20px] mob_screen:w-[20px]" src="/images/share.png" alt="" height={25} width={25}/>
          </div>
        </div>
        {/* COMMENT DIV */}
        <div className="p-2">
          <Comment />
          <NewComment />
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
