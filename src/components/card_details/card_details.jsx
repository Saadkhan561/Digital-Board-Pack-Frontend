import React, { useState } from "react";
import NewComment from "./new_comment";
import Comment from "./comments";
import Share from "../share_doc_popup";
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
// const path = require('/images/saad_cv.docx')

const CardDetails = () => {
  // const docs = [
  //     { uri: require('/images/saad_cv.docx') } // Local File
  //   ];

  const [isShare, setShare] = useState(false);

  const renderShareDiv = () => {
    if (isShare) {
      return (
        <div className="">
          <Share />
        </div>
      );
    }
  };

  return (
    //   <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    <div className="w-full relative">
      <div className="p-4 mr-4 ml-4">
        <div className="flex justify-between items-center border-b-2 border-b-gray-300 pb-4">
          <div className="flex items-center gap-5">
            <div>
              <img
                className="rounded-full mob_screen:h-[50px] mob_screen:w-[50px] h-[50px] w-[50px] menu_bar_mob:h-[30px] menu_bar_mob:w-[30px]"
                src="/images/account.png"
                alt=""
              />
            </div>
            <div>
              <p className="text-2xl mob_screen:text-lg menu_bar_mob:text-md font-bold text-blue-600">
                Sales in January
              </p>
              <p className="text-md menu_bar_mob:text-xs mob_screen:text-sm text-gray-500 font-semibold">
                Owner Name - 26 Nov 2023
              </p>
            </div>
          </div>
          <div>
            <img
              className="cursor-pointer mob_screen:h-[20px] mob_screen:w-[20px] menu_bar_mob:h-[15px] menu_bar_mob:w-[15px]"
              src="/images/dots.png"
              alt=""
              height={25}
              width={25}
            />
          </div>
        </div>
        {/* DOCUMENT DIV */}
        <div className="items-center flex justify-between p-4 pb-4 border-b-2 border-b-gray-300">
          <div>
            <img
              className="mob_screen:h-[70px] mob_screen:w-[70px] menu_bar_mob:h-[50px] menu_bar_mob:w-[50px]"
              src="/images/word.png"
              alt=""
              height={100}
              width={100}
            />
          </div>
          <div>
            <img
              onClick={() => setShare(!isShare)}
              className="cursor-pointer mob_screen:h-[20px] mob_screen:w-[20px] menu_bar_mob:h-[15px] menu_bar_mob:w-[15px]"
              src="/images/share.png"
              alt=""
              height={25}
              width={25}
            />
              {renderShareDiv()}
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
