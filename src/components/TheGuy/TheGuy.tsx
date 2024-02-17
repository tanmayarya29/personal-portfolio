import { Box } from "@mui/material";
import { useState, useEffect, useRef } from "react";

const TheGuy = () => {
  const { width, height } = { width: 500, height: 500 };
  const leftEye = useRef<SVGGElement>(null);
  const rightEye = useRef<SVGGElement>(null);
  const leftPupil = useRef<SVGGElement>(null);
  const rightPupil = useRef<SVGGElement>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const leftEyeRect = leftEye.current?.getBoundingClientRect();
    const rightEyeRect = rightEye.current?.getBoundingClientRect();
    const leftPupilRect = leftPupil.current?.getBoundingClientRect();
    const rightPupilRect = rightPupil.current?.getBoundingClientRect();
    if (leftEyeRect && rightEyeRect && leftPupilRect && rightPupilRect) {
      const leftEyeCenter = {
        x: leftEyeRect?.left + leftEyeRect?.width / 2,
        y: leftEyeRect?.top + leftEyeRect?.height / 2,
      };
      const rightEyeCenter = {
        x: rightEyeRect?.left + rightEyeRect?.width / 2,
        y: rightEyeRect?.top + rightEyeRect?.height / 2,
      };
      const leftPupilCenter = {
        x: leftPupilRect?.left + leftPupilRect?.width / 2,
        y: leftPupilRect?.top + leftPupilRect?.height / 2,
      };
      const rightPupilCenter = {
        x: rightPupilRect?.left + rightPupilRect?.width / 2,
        y: rightPupilRect?.top + rightPupilRect?.height / 2,
      };

      const leftEyeAngle = Math.atan2(
        mousePosition.y - leftEyeCenter.y,
        mousePosition.x - leftEyeCenter.x
      );

      const rightEyeAngle = Math.atan2(
        mousePosition.y - rightEyeCenter.y,
        mousePosition.x - rightEyeCenter.x
      );

      const leftPupilAngle = Math.atan2(
        mousePosition.y - leftPupilCenter.y,
        mousePosition.x - leftPupilCenter.x
      );

      const rightPupilAngle = Math.atan2(
        mousePosition.y - rightPupilCenter.y,
        mousePosition.x - rightPupilCenter.x
      );

      const leftEyeDistance = Math.sqrt(
        Math.pow(mousePosition.x - leftEyeCenter.x, 2) +
          Math.pow(mousePosition.y - leftEyeCenter.y, 2)
      );

      const rightEyeDistance = Math.sqrt(
        Math.pow(mousePosition.x - rightEyeCenter.x, 2) +
          Math.pow(mousePosition.y - rightEyeCenter.y, 2)
      );

      const leftPupilDistance = Math.sqrt(
        Math.pow(mousePosition.x - leftPupilCenter.x, 2) +
          Math.pow(mousePosition.y - leftPupilCenter.y, 2)
      );

      const rightPupilDistance = Math.sqrt(
        Math.pow(mousePosition.x - rightPupilCenter.x, 2) +
          Math.pow(mousePosition.y - rightPupilCenter.y, 2)
      );

      const leftEyeMaxDistance = 50;
      const rightEyeMaxDistance = 50;
      const leftPupilMaxDistance = 10;
      const rightPupilMaxDistance = 10;

      const leftEyeDistanceRatio = Math.min(
        leftEyeDistance / leftEyeMaxDistance,
        1
      );

      const rightEyeDistanceRatio = Math.min(
        rightEyeDistance / rightEyeMaxDistance,
        1
      );

      const leftPupilDistanceRatio = Math.min(
        leftPupilDistance / leftPupilMaxDistance,
        7
      );

      const rightPupilDistanceRatio = Math.min(
        rightPupilDistance / rightPupilMaxDistance,
        7
      );

      const leftEyeX = leftEyeDistanceRatio * Math.cos(leftEyeAngle);
      const leftEyeY = leftEyeDistanceRatio * Math.sin(leftEyeAngle);

      const rightEyeX = rightEyeDistanceRatio * Math.cos(rightEyeAngle);
      const rightEyeY = rightEyeDistanceRatio * Math.sin(rightEyeAngle);

      const leftPupilX = leftPupilDistanceRatio * Math.cos(leftPupilAngle);
      const leftPupilY = leftPupilDistanceRatio * Math.sin(leftPupilAngle);

      const rightPupilX = rightPupilDistanceRatio * Math.cos(rightPupilAngle);
      const rightPupilY = rightPupilDistanceRatio * Math.sin(rightPupilAngle);

      leftEye.current?.setAttribute(
        "transform",
        `translate(${leftEyeX}, ${leftEyeY})`
      );

      rightEye.current?.setAttribute(
        "transform",
        `translate(${rightEyeX}, ${rightEyeY})`
      );

      leftPupil.current?.setAttribute(
        "transform",
        `translate(${leftPupilX}, ${leftPupilY})`
      );

      rightPupil.current?.setAttribute(
        "transform",
        `translate(${rightPupilX}, ${rightPupilY})`
      );

      // make face tilt in direction of mouse
      const face = document.getElementById("face");
      const faceRect = face?.getBoundingClientRect();
      if (faceRect) {
        const faceCenter = {
          x: faceRect?.left + faceRect?.width / 2,
          y: faceRect?.top + faceRect?.height / 2,
        };
        const faceAngle = Math.atan2(
          mousePosition.y - faceCenter.y,
          mousePosition.x - faceCenter.x
        );
        const faceDistance = Math.sqrt(
          Math.pow(mousePosition.x - faceCenter.x, 2) +
            Math.pow(mousePosition.y - faceCenter.y, 2)
        );
        const faceMaxDistance = 100;
        const faceDistanceRatio = Math.min(faceDistance / faceMaxDistance, 50);
        const faceX = faceDistanceRatio * Math.cos(faceAngle);
        const faceY = faceDistanceRatio * Math.sin(faceAngle);
        const faceZAngle = Math.atan2(
          mousePosition.y - faceCenter.y,
          mousePosition.x - faceCenter.x
        );
        const faceZDistance = Math.sqrt(
          Math.pow(mousePosition.x - faceCenter.x, 2) +
            Math.pow(mousePosition.y - faceCenter.y, 2)
        );

        const faceZMaxDistance = 1000;
        const faceZDistanceRatio = Math.min(
          faceZDistance / faceZMaxDistance,
          50
        );
        const faceZ = faceZDistanceRatio * Math.cos(faceZAngle);
        face?.setAttribute(
          "transform",
          `translate(${faceX}, ${faceY})
       rotate(
        ${faceZ}
      )`
        );
      }

      // if mouse is left make left eyebrow go up and right eyebrow go down and vice versa
      const leftEyebrow = document.getElementById("left");
      const rightEyebrow = document.getElementById("right");
      const leftEyebrowRect = leftEyebrow?.getBoundingClientRect();
      const rightEyebrowRect = rightEyebrow?.getBoundingClientRect();
      if (leftEyebrowRect && rightEyebrowRect) {
        const leftEyebrowCenter = {
          x: leftEyebrowRect?.left + leftEyebrowRect?.width / 2,
          y: leftEyebrowRect?.top + leftEyebrowRect?.height / 2,
        };
        const rightEyebrowCenter = {
          x: rightEyebrowRect?.left + rightEyebrowRect?.width / 2,
          y: rightEyebrowRect?.top + rightEyebrowRect?.height / 2,
        };

        const leftEyebrowAngle = Math.atan2(
          mousePosition.y - leftEyebrowCenter.y,
          mousePosition.x - leftEyebrowCenter.x
        );

        const rightEyebrowAngle = Math.atan2(
          mousePosition.y - rightEyebrowCenter.y,
          mousePosition.x - rightEyebrowCenter.x
        );

        const leftEyebrowDistance = Math.sqrt(
          Math.pow(mousePosition.x - leftEyebrowCenter.x, 2) +
            Math.pow(mousePosition.y - leftEyebrowCenter.y, 2)
        );

        const rightEyebrowDistance = Math.sqrt(
          Math.pow(mousePosition.x - rightEyebrowCenter.x, 2) +
            Math.pow(mousePosition.y - rightEyebrowCenter.y, 2)
        );

        const leftEyebrowMaxDistance = 10;

        const rightEyebrowMaxDistance = 10;

        const leftEyebrowDistanceRatio = Math.min(
          leftEyebrowDistance / leftEyebrowMaxDistance,
          1
        );

        const rightEyebrowDistanceRatio = Math.min(
          rightEyebrowDistance / rightEyebrowMaxDistance,
          1
        );

        const leftEyebrowX =
          leftEyebrowDistanceRatio * Math.cos(leftEyebrowAngle);
        const leftEyebrowY =
          leftEyebrowDistanceRatio * Math.sin(leftEyebrowAngle);

        const rightEyebrowX =
          rightEyebrowDistanceRatio * Math.cos(rightEyebrowAngle);
        const rightEyebrowY =
          rightEyebrowDistanceRatio * Math.sin(rightEyebrowAngle);

        leftEyebrow?.setAttribute(
          "transform",
          `translate(${leftEyebrowX}, ${leftEyebrowY})`
        );
        rightEyebrow?.setAttribute(
          "transform",
          `translate(${rightEyebrowX}, ${rightEyebrowY})`
        );
      }
    }
  }, [mousePosition]);

  return (
    <Box
      className="theGuy"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        // width="228"
        // height="330"
        width={width}
        height={height}
        viewBox="0 0 228 330"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="theGuy">
          <g id="body">
            <path
              id="Body"
              d="M0 299.818C0 276.959 15.5021 257.011 37.6528 251.366L114 231.91L190.347 251.366C212.498 257.011 228 276.959 228 299.818V303.537C184.491 281.708 167.5 276.489 114 303.537C60.5 330.584 45.5712 346.204 0 303.537V299.818Z"
              fill="url(#paint0_linear_33_185)"
            />
          </g>
          <g id="neck" filter="url(#filter0_d_33_185)">
            <path
              id="neck_2"
              d="M94.7385 205.363H134.804L143.661 240.425L134.804 263.466L115.001 285.505L94.7385 263.466L85.2532 240.425L94.7385 205.363Z"
              fill="url(#paint1_radial_33_185)"
            />
          </g>
          <g id="face">
            <g id="headphone" filter="url(#filter1_d_33_185)">
              <path
                id="Rectangle 5"
                d="M191.22 127.089L189.775 143.634C189.033 152.127 181.677 158.451 173.225 157.975L177.408 110.087C185.813 111.089 191.962 118.596 191.22 127.089Z"
                fill="#0D0800"
                stroke="black"
              />
              <path
                id="Rectangle 6"
                d="M54.3959 155.856C46.3938 156.082 39.6002 149.917 39.1087 141.867L37.9951 123.627C37.5036 115.577 43.4965 108.628 51.4665 107.876L54.3959 155.856Z"
                fill="black"
                stroke="#050000"
              />
              <path
                id="Vector 3"
                d="M41.3061 130.912C-14.4002 20.381 239.469 3.9253 187.116 133.462"
                stroke="black"
                stroke-width="8"
              />
            </g>
            <g id="face_2" filter="url(#filter2_d_33_185)">
              <path
                d="M47.2267 101.888C43.8763 62.1523 75.2244 28.0496 115.101 28.0496V28.0496C154.905 28.0496 186.228 62.0329 182.991 101.705L177.193 172.756C175.249 196.582 159.565 217.075 137.075 225.178V225.178C124.078 229.861 109.877 229.993 96.7955 225.552L95.9328 225.26C71.9833 217.13 55.127 195.582 53.0019 170.38L47.2267 101.888Z"
                fill="url(#paint2_linear_33_185)"
              />
            </g>
            <g id="eye">
              <g id="eye-right" ref={rightEye}>
                <path
                  id="container"
                  d="M153.5 120.213C153.5 126.215 151.899 131.626 149.336 135.522C146.77 139.421 143.282 141.751 139.5 141.751C135.718 141.751 132.231 139.421 129.665 135.522C127.102 131.626 125.5 126.215 125.5 120.213C125.5 114.21 127.102 108.799 129.665 104.903C132.231 101.004 135.718 98.6736 139.5 98.6736C143.282 98.6736 146.77 101.004 149.336 104.903C151.899 108.799 153.5 114.21 153.5 120.213Z"
                  fill="white"
                  stroke="black"
                />
                <g id="pupil" filter="url(#filter3_d_33_185)" ref={rightPupil}>
                  <mask id="path-8-inside-1_33_185" fill="white">
                    <path d="M145 120.213C145 122.979 142.761 125.221 140 125.221C137.238 125.221 135 122.979 135 120.213C135 117.446 137.238 115.204 140 115.204C142.761 115.204 145 117.446 145 120.213ZM138.5 120.213C138.5 121.042 139.171 121.715 140 121.715C140.828 121.715 141.5 121.042 141.5 120.213C141.5 119.383 140.828 118.71 140 118.71C139.171 118.71 138.5 119.383 138.5 120.213Z" />
                  </mask>
                  <path
                    d="M145 120.213C145 122.979 142.761 125.221 140 125.221C137.238 125.221 135 122.979 135 120.213C135 117.446 137.238 115.204 140 115.204C142.761 115.204 145 117.446 145 120.213ZM138.5 120.213C138.5 121.042 139.171 121.715 140 121.715C140.828 121.715 141.5 121.042 141.5 120.213C141.5 119.383 140.828 118.71 140 118.71C139.171 118.71 138.5 119.383 138.5 120.213Z"
                    fill="black"
                  />
                  <path
                    d="M145 120.213C145 122.979 142.761 125.221 140 125.221C137.238 125.221 135 122.979 135 120.213C135 117.446 137.238 115.204 140 115.204C142.761 115.204 145 117.446 145 120.213ZM138.5 120.213C138.5 121.042 139.171 121.715 140 121.715C140.828 121.715 141.5 121.042 141.5 120.213C141.5 119.383 140.828 118.71 140 118.71C139.171 118.71 138.5 119.383 138.5 120.213Z"
                    stroke="black"
                    stroke-width="2"
                    mask="url(#path-8-inside-1_33_185)"
                  />
                </g>
              </g>
              <g id="eye-left" ref={leftEye}>
                <path
                  id="container_2"
                  d="M103.499 120.213C103.499 126.215 101.898 131.626 99.3346 135.522C96.7688 139.421 93.281 141.751 89.4993 141.751C85.7175 141.751 82.2297 139.421 79.6639 135.522C77.1009 131.626 75.4993 126.215 75.4993 120.213C75.4993 114.21 77.1009 108.799 79.6639 104.903C82.2297 101.004 85.7175 98.6736 89.4993 98.6736C93.281 98.6736 96.7688 101.004 99.3346 104.903C101.898 108.799 103.499 114.21 103.499 120.213Z"
                  fill="white"
                  stroke="black"
                />
                <g id="pupil_2" filter="url(#filter4_d_33_185)" ref={leftPupil}>
                  <mask id="path-10-inside-2_33_185" fill="white">
                    <path d="M94.9998 120.213C94.9998 122.979 92.7612 125.221 89.9998 125.221C87.2383 125.221 84.9998 122.979 84.9998 120.213C84.9998 117.446 87.2383 115.204 89.9998 115.204C92.7612 115.204 94.9998 117.446 94.9998 120.213ZM88.4998 120.213C88.4998 121.042 89.1713 121.715 89.9998 121.715C90.8282 121.715 91.4998 121.042 91.4998 120.213C91.4998 119.383 90.8282 118.71 89.9998 118.71C89.1713 118.71 88.4998 119.383 88.4998 120.213Z" />
                  </mask>
                  <path
                    d="M94.9998 120.213C94.9998 122.979 92.7612 125.221 89.9998 125.221C87.2383 125.221 84.9998 122.979 84.9998 120.213C84.9998 117.446 87.2383 115.204 89.9998 115.204C92.7612 115.204 94.9998 117.446 94.9998 120.213ZM88.4998 120.213C88.4998 121.042 89.1713 121.715 89.9998 121.715C90.8282 121.715 91.4998 121.042 91.4998 120.213C91.4998 119.383 90.8282 118.71 89.9998 118.71C89.1713 118.71 88.4998 119.383 88.4998 120.213Z"
                    fill="black"
                  />
                  <path
                    d="M94.9998 120.213C94.9998 122.979 92.7612 125.221 89.9998 125.221C87.2383 125.221 84.9998 122.979 84.9998 120.213C84.9998 117.446 87.2383 115.204 89.9998 115.204C92.7612 115.204 94.9998 117.446 94.9998 120.213ZM88.4998 120.213C88.4998 121.042 89.1713 121.715 89.9998 121.715C90.8282 121.715 91.4998 121.042 91.4998 120.213C91.4998 119.383 90.8282 118.71 89.9998 118.71C89.1713 118.71 88.4998 119.383 88.4998 120.213Z"
                    stroke="black"
                    stroke-width="2"
                    mask="url(#path-10-inside-2_33_185)"
                  />
                </g>
              </g>
            </g>
            <g id="eyebrow" filter="url(#filter5_d_33_185)">
              <path
                id="right"
                d="M68.0002 96.4768C74.5002 85.9582 91.145 87.5082 105.5 96.4768"
                stroke="#582A00"
                stroke-width="4"
              />
              <path
                id="left"
                d="M160.501 96.7837C154.001 86.2651 137.356 87.8151 123.001 96.7837"
                stroke="#582A00"
                stroke-width="4"
              />
            </g>
            <g id="Hair" filter="url(#filter6_i_33_185)">
              <path
                d="M151.887 64.9147C119.096 52.9518 130.596 62.6503 143.47 75.9855C156.343 89.3207 116.731 55.3536 76.624 68.4372C36.5167 81.5208 58.7985 89.5723 49.3906 108.191C41.9634 94.1012 32.0601 75.9855 37.5067 59.8826C7.30266 23.1479 78.7381 6.87606 123.664 -1.00241e-08C101.382 10.5675 104.392 10.8422 110.789 9.05787C116.525 7.45799 122.178 4.02572 160.305 4.02572C169.086 6.75473 138.518 12.5804 156.343 12.5804C156.343 12.5804 170.208 9.64998 187.043 23.1479C157.491 23.1479 190.509 23.1479 200.412 45.7926C206.574 59.8826 177.635 35.7283 187.043 45.7926C193.24 54.808 190.509 75.9855 190.509 75.9855L181.101 102.153C181.101 68.4372 177.14 74.1275 151.887 64.9147Z"
                fill="url(#paint3_linear_33_185)"
              />
            </g>
            <g id="nose">
              <g id="nose_2" filter="url(#filter7_d_33_185)">
                <path
                  d="M112.5 127.225C103.098 147.421 98.5176 158.216 103 167.797C122.269 161.951 120.526 165.439 112.5 174.308"
                  stroke="black"
                />
              </g>
            </g>
            <g id="smile">
              <g id="smile_2" filter="url(#filter8_d_33_185)">
                <path
                  d="M91.0002 185.328C108.912 196.416 118.338 195.227 134.5 185.328"
                  stroke="black"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_33_185"
            x="78.2532"
            y="205.363"
            width="72.4077"
            height="96.1417"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="9" />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_33_185"
            x="25.2654"
            y="38.0864"
            width="177.009"
            height="128.414"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_33_185"
            x="42.981"
            y="26.0496"
            width="144.24"
            height="208.74"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d_33_185"
            x="131"
            y="115.204"
            width="18"
            height="18.0177"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_d_33_185"
            x="80.9998"
            y="115.204"
            width="18"
            height="18.0177"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_d_33_185"
            x="62.2988"
            y="87.1577"
            width="103.903"
            height="19.3221"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <filter
            id="filter6_i_33_185"
            x="30.2812"
            y="0"
            width="171"
            height="112.191"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="8.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_33_185"
            />
          </filter>
          <filter
            id="filter7_d_33_185"
            x="98.7666"
            y="121.014"
            width="25.9307"
            height="55.6297"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="-2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.8 0 0 0 0 0.528 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <filter
            id="filter8_d_33_185"
            x="86.7371"
            y="182.901"
            width="52.0244"
            height="16.8029"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.38 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_33_185"
            x1="114"
            y1="239.423"
            x2="114"
            y2="303.537"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#230038" />
            <stop offset="1" stop-color="#012B00" stop-opacity="0.37" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_33_185"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(114.001 238.922) rotate(90) scale(33.5593 47)"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#FFCB67" />
          </radialGradient>
          <linearGradient
            id="paint2_linear_33_185"
            x1="115.001"
            y1="28.0496"
            x2="115.001"
            y2="220.39"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.15625" stop-color="#FFC24A" />
            <stop offset="1" stop-color="#FFF3DD" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_33_185"
            x1="122.05"
            y1="-9.85056e-09"
            x2="122.05"
            y2="95.6108"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#582A00" />
            <stop offset="1" stop-color="#C25D00" />
          </linearGradient>
        </defs>
      </svg>

      {/* <svg
        width="242"
        height="317"
        viewBox="0 0 242 317"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="theGuy" filter="url(#filter0_d_33_185)">
          <g id="body">
            <path
              id="Body"
              d="M7.5 296C7.5 268.662 29.6619 246.5 57 246.5H185C212.338 246.5 234.5 268.662 234.5 296V309.5H7.5V296Z"
              fill="url(#paint0_linear_33_185)"
              stroke="black"
            />
          </g>
          <g id="neck" filter="url(#filter1_d_33_185)">
            <path
              id="neck_2"
              d="M101.738 212H141.803L150.66 247L141.803 270L122 292L101.738 270L92.2524 247L101.738 212Z"
              fill="url(#paint1_radial_33_185)"
            />
          </g>
          <g id="face">
            <g id="headphone" filter="url(#filter2_d_33_185)">
              <path
                id="Rectangle 5"
                d="M184.408 116.893C192.814 117.894 198.961 125.4 198.218 133.893L196.778 150.352C196.035 158.845 188.678 165.17 180.226 164.695L184.408 116.893Z"
                fill="#0D0800"
                stroke="black"
              />
              <path
                id="Rectangle 6"
                d="M44.9962 130.435C44.5039 122.385 50.4961 115.437 58.4661 114.686L61.3954 162.58C53.3932 162.805 46.5989 156.639 46.1066 148.589L44.9962 130.435Z"
                fill="black"
                stroke="#050000"
              />
              <path
                id="Vector 3"
                d="M48.3064 137.681C-7.39999 27.345 246.469 10.9184 194.116 140.226"
                stroke="black"
                stroke-width="8"
              />
            </g>
            <g id="face_2" filter="url(#filter3_d_33_185)">
              <path
                d="M54.2367 108.838C50.8805 69.1043 82.2254 35 122.1 35C161.902 35 193.222 68.9847 189.979 108.654L184.199 179.359C182.251 203.196 166.551 223.696 144.045 231.791C131.066 236.459 116.888 236.59 103.824 232.164L102.962 231.872C78.9958 223.751 62.1226 202.197 59.9928 176.982L54.2367 108.838Z"
                fill="url(#paint2_linear_33_185)"
              />
            </g>
            <g id="eye">
              <g id="eye-right" ref={rightEye}>
                <path
                  id="container"
                  d="M160.5 127C160.5 132.991 158.898 138.393 156.335 142.281C153.77 146.174 150.282 148.5 146.5 148.5C142.718 148.5 139.23 146.174 136.664 142.281C134.101 138.393 132.5 132.991 132.5 127C132.5 121.009 134.101 115.607 136.664 111.719C139.23 107.826 142.718 105.5 146.5 105.5C150.282 105.5 153.77 107.826 156.335 111.719C158.898 115.607 160.5 121.009 160.5 127Z"
                  fill="white"
                  stroke="black"
                />
                <g id="pupil" filter="url(#filter4_d_33_185)" ref={rightPupil}>
                  <circle cx="147" cy="127" r="5" fill="black" />
                  <circle cx="147" cy="127" r="4.5" stroke="black" />
                </g>
              </g>
              <g id="eye-left" ref={leftEye}>
                <path
                  id="container_2"
                  d="M110.5 127C110.5 132.991 108.898 138.393 106.335 142.281C103.77 146.174 100.282 148.5 96.4998 148.5C92.7176 148.5 89.2298 146.174 86.6642 142.281C84.1013 138.393 82.4998 132.991 82.4998 127C82.4998 121.009 84.1013 115.607 86.6642 111.719C89.2298 107.826 92.7176 105.5 96.4998 105.5C100.282 105.5 103.77 107.826 106.335 111.719C108.898 115.607 110.5 121.009 110.5 127Z"
                  fill="white"
                  stroke="black"
                />
                <g id="pupil_2" filter="url(#filter5_d_33_185)" ref={leftPupil}>
                  <circle cx="96.9998" cy="127" r="5" fill="black" />
                  <circle cx="96.9998" cy="127" r="4.5" stroke="black" />
                </g>
              </g>
            </g>
            <g id="hair" filter="url(#filter6_d_33_185)">
              <g id="Hair" filter="url(#filter7_i_33_185)">
                <path
                  d="M160.5 71.5C127.388 59.6135 139 69.25 152 82.5C165 95.75 125 62 84.4999 75C43.9999 88 66.4999 96 56.9999 114.5C49.4999 100.5 39.4996 82.5 44.9996 66.5C14.4998 30 86.6347 13.8321 132 7.00002C109.5 17.5 112.54 17.773 119 16C124.792 14.4104 130.5 11 169 11C177.868 13.7116 147 19.5 165 19.5C165 19.5 179 16.5883 196 30C166.159 30 199.5 30 209.5 52.5C215.722 66.5 186.5 42.5 196 52.5C202.257 61.4578 199.5 82.5 199.5 82.5L190 108.5C190 75 186 80.6539 160.5 71.5Z"
                  fill="url(#paint3_linear_33_185)"
                />
              </g>
            </g>
            <g id="eyebrow" filter="url(#filter8_d_33_185)">
              <path
                id="right"
                d="M74.9998 102.306C81.4998 91.8063 98.1445 93.3535 112.5 102.306"
                stroke="#582A00"
                stroke-width="4"
              />
              <path
                id="left"
                d="M167.5 102.613C161 92.1126 144.355 93.6598 130 102.613"
                stroke="#582A00"
                stroke-width="4"
              />
            </g>
            <g id="nose">
              <g id="nose_2" filter="url(#filter9_d_33_185)">
                <path
                  d="M119.5 134C110.098 154.16 105.518 164.937 110 174.5C129.269 168.665 127.526 172.146 119.5 181"
                  stroke="black"
                />
              </g>
            </g>
            <g id="smile">
              <g id="smile_2" filter="url(#filter10_d_33_185)">
                <path
                  id="smile_path"
                  d="M97.9998 192C115.912 203.069 125.338 201.881 141.5 192"
                  stroke="black"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_33_185"
            x="0"
            y="1.52588e-05"
            width="242"
            height="317"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_33_185"
            x="85.2524"
            y="212"
            width="72.4077"
            height="96"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="9" />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_33_185"
            x="32.2656"
            y="45.012"
            width="177.008"
            height="128.208"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d_33_185"
            x="49.9902"
            y="33"
            width="144.22"
            height="208.39"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_d_33_185"
            x="138"
            y="122"
            width="18"
            height="18"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_d_33_185"
            x="87.9998"
            y="122"
            width="18"
            height="18"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <filter
            id="filter6_d_33_185"
            x="33.7034"
            y="7.00002"
            width="180.675"
            height="115.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <filter
            id="filter7_i_33_185"
            x="37.7034"
            y="7.00002"
            width="172.675"
            height="111.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="8.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_33_185"
            />
          </filter>
          <filter
            id="filter8_d_33_185"
            x="69.2993"
            y="93.0001"
            width="103.901"
            height="19.3095"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <filter
            id="filter9_d_33_185"
            x="105.767"
            y="127.789"
            width="25.9307"
            height="55.5471"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="-2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.8 0 0 0 0 0.528 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <filter
            id="filter10_d_33_185"
            x="93.7368"
            y="189.573"
            width="52.0237"
            height="16.7892"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.38 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_185"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_185"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_33_185"
            x1="121"
            y1="246"
            x2="121"
            y2="310"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#230038" />
            <stop offset="1" stop-color="#012B00" stop-opacity="0.37" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_33_185"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(121 245.5) rotate(90) scale(33.5 47)"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#FFCB67" />
          </radialGradient>
          <linearGradient
            id="paint2_linear_33_185"
            x1="122"
            y1="35"
            x2="122"
            y2="227"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.15625" stop-color="#FFC24A" />
            <stop offset="1" stop-color="#FFF3DD" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_33_185"
            x1="130.371"
            y1="7.00002"
            x2="130.371"
            y2="102"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#582A00" />
            <stop offset="1" stop-color="#C25D00" />
          </linearGradient>
        </defs>
      </svg> */}
    </Box>
  );
};

export default TheGuy;
