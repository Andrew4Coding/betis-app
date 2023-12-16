export default function MainBoat({mainColor, shadeColor, scale}){    
    return <>
    <svg width='100%' height='100%' viewBox="0 0 600 352" fill="none" xmlns="http://www.w3.org/2000/svg" className="duration-100 hover:scale-110">
        <ellipse className="animate-pulse" cx="117.774" cy="228.636" rx="117.774" ry="228.636" transform="matrix(0.866025 0.5 -0.866025 0.5 396.01 4.71094)" fill="#2789B4"/>
        
        <path d="M347.432 69.486L162.527 176.658L255.569 234.368L462.851 111.883C450.681 104.817 411.737 83.1492 391.009 71.8429C370.28 60.5366 354.499 65.9539 347.432 69.486Z" fill="#905858"/>
        <path d="M396.167 74.1958C375.439 62.8895 360.05 64.7739 354.946 67.1294L162.531 176.663C159.783 175.543 153.172 173.331 149.574 162.53C146.043 151.93 146.04 138.975 153.107 134.264C193.543 110.708 290.355 52.3181 324.327 35.3341C359.661 17.6691 386.747 23.5565 405.591 29.4421C414.62 34.5456 438.853 47.7032 470.366 68.3084C500.988 88.3299 480.966 103.641 463.298 111.882C449.558 104.031 416.895 85.5021 396.167 74.1958Z" fill={shadeColor}/>
        <path d="M312.098 200.215L193.146 124.84L227.301 104.818L352.141 176.66L312.098 200.215Z" fill="white"/>
        <path d="M193.146 131.906V124.84L312.098 200.215V206.104L193.146 131.906Z" fill="#D9D9D9"/>
        <path d="M406.319 144.864L287.367 69.4883L321.522 49.4668L446.362 121.309L406.319 144.864Z" fill="white"/>
        <path d="M287.367 76.5547V69.4883L406.319 144.864V150.752L287.367 76.5547Z" fill="#D9D9D9"/>
        <path d="M316.811 260.282C250.858 297.027 143.684 263.422 97.752 243.793C110.707 244.186 137.795 244.971 182.549 246.149C226.817 247.314 279.516 225.735 295.612 216.706C354.891 182.551 474.985 115.985 482.872 109.531C495.827 98.9317 493.865 89.5098 494.65 83.6211C494.65 95.3985 495.827 119.189 495.827 134.264C495.827 149.339 491.117 161.302 482.872 166.063C454.999 182.159 382.765 223.536 316.811 260.282Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M97.7507 243.793L200.216 246.146C217.882 244.183 259.809 236.724 286.19 222.591C312.572 208.459 429.089 141.328 484.051 109.529C487.584 106.781 494.652 97.0468 494.652 84.7983C494.652 72.5498 472.275 57.7103 460.497 51.8216L418.431 26.9632C411.948 23.1321 405.09 19.9082 397.706 18.4302C377.004 14.2862 342.951 12.6547 315.634 28.2646C282.657 47.1084 186.475 104.427 142.506 130.73C131.907 138.582 108.352 159.702 98.9301 181.373C89.5082 203.043 94.6101 231.231 97.7507 243.793ZM328.589 32.982L153.105 134.267C146.038 137.801 144.86 161.355 155.459 170.776C164.595 178.896 190.818 193.233 207.389 202.292C209.978 203.708 212.331 204.994 214.346 206.108C230.835 212.389 267.818 223.066 283.835 215.529C299.852 207.991 416.132 139.37 472.271 106C482.871 100.112 496.297 83.8589 465.205 65.9573C444.053 53.7792 427.881 43.817 417.353 37.3322C412.405 34.2844 408.705 32.0047 406.32 30.6241C395.722 24.7345 353.085 19.7913 328.589 32.982Z" fill={mainColor}/>
        <path d="M387.89 55.3537C386.007 52.5266 385.537 45.9318 387.892 44.7541L435 20.0216C434.607 18.4512 434.764 14.3684 438.533 10.5996C442.302 6.83088 452.666 1.9629 457.377 0L488.76 18.8438L484.049 17.6661L479.338 16.4883C467.561 16.4883 460.494 24.7325 460.494 31.7989V51.8205L435 36.5099L397.311 57.7092C396.137 58.8869 390.244 58.8869 387.89 55.3537Z" fill="#797980"/>
        <path d="M492.293 61.2423V77.7307C483.762 66.8733 472.844 57.9955 460.494 51.8204V31.7989C460.494 23.5547 468.032 16.4883 479.338 16.4883C490.644 16.4883 497.004 24.7324 497.004 31.7989V61.2423H492.293Z" fill="#54555F"/>
        <path d="M386.297 201.394C386.297 192.828 372.164 194.328 372.164 194.328V209.637C372.164 214.35 375.462 214.35 379.23 214.35H386.297V201.394Z" fill="#D9D9D9"/>
        <path d="M438.117 173.127C438.117 164.561 423.984 164.884 423.984 164.884V177.838C423.984 182.551 427.282 182.551 431.051 182.551H438.117V173.127Z" fill="#D9D9D9"/>
        <path d="M285.749 249.108L442.827 160.174C449.893 153.5 465.91 138.975 473.448 134.264C480.985 129.553 497.003 119.738 504.069 115.42L506.425 117.775L504.069 120.131V147.219L464.026 169.596H447.538L291.809 259.696C287.742 262.049 282.654 259.114 282.654 254.416C282.654 252.218 283.836 250.191 285.749 249.108Z" fill={shadeColor}/>
        <path d="M445.18 162.527L288.102 251.461C286.19 252.544 285.008 254.572 285.008 256.77C285.008 261.468 290.096 264.402 294.163 262.049L449.891 171.949H466.379L506.423 149.572V117.773C499.356 122.092 483.339 131.906 475.801 136.617C468.264 141.328 452.247 155.854 445.18 162.527Z" fill={mainColor}/>
        <path d="M435.76 160.172C439.686 161.611 446.361 164.098 446.361 168.416V177.838L438.117 183.334V184.904H435.762H427.518L435.762 180.193V175.709C435.762 174.781 435.585 173.862 435.24 173.001C434.133 170.232 431.451 168.416 428.469 168.416H426.619V169.235L423.984 170.772V168.416L423.986 164.883H426.619L435.76 160.172Z" fill="#95979D"/>
        <path d="M383.94 189.617C387.866 191.057 394.541 193.543 394.541 197.861V207.283L386.297 212.779V214.35H383.941H376.562L383.941 210.079V205.155C383.941 204.227 383.764 203.307 383.42 202.446C382.312 199.677 379.63 197.861 376.648 197.861H374.798V198.681L372.164 200.217V197.861L372.165 194.328H374.798L383.94 189.617Z" fill="#95979D"/>
        <path d="M383.941 189.617L372.164 194.328H376.162C379.551 194.328 382.715 196.022 384.595 198.841C385.705 200.506 386.297 202.462 386.297 204.463V214.35L395.719 208.461V199.039C395.719 194.328 387.867 191.188 383.941 189.617Z" fill="#C5C9D3"/>
        <path d="M435.762 160.172L423.984 164.883H427.982C431.371 164.883 434.535 166.576 436.415 169.396C437.525 171.061 438.117 173.017 438.117 175.018V184.904L447.539 179.016V169.594C447.539 164.883 439.688 161.742 435.762 160.172Z" fill="#C5C9D3"/>
        <ellipse cx="392.682" cy="51.2178" rx="8.1976" ry="7.33203" transform="rotate(31 392.682 51.2178)" fill="#54555F"/>
    </svg>
    </>
}
