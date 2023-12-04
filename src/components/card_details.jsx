import React from "react";
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
// const path = require('/images/saad_cv.docx')

const CardDetails = () => {
  // const docs = [
  //     { uri: require('/images/saad_cv.docx') } // Local File
  //   ];

  return (
    //   <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    <div>
      <div className="p-4 mr-4 ml-4">
        <div className="flex justify-between items-center border-b-black">
          <div className="flex items-center gap-5">
            <div>
              <img
                className="rounded-full"
                src="/images/word.png"
                alt=""
                height={80}
                width={80}
              />
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">
                Sales in January
              </p>
              <p className="text-md text-gray-500 font-semibold">
                Owner Name - 26 Nov 2023
              </p>
            </div>
          </div>
          <div>
            <img src="/images/dots.png" alt="" height={25} width={25} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CardDetails;
