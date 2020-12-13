<template>
    <div id="main">
      <div id="loading-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="lds-spinner" width="75px" height="75px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfc">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(30 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfc">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(60 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfc">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(90 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfc">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(120 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfc">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(150 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfc">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(180 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfc">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(210 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfc">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(240 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfc">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(270 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfc">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(300 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfc">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/>
            </rect>
          </g><g transform="rotate(330 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fefbfc">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"/>
            </rect>
          </g>
        </svg>
      </div>
    </div>
</template>

<style lang="scss" scoped>
#main {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #111;

    #loading-wrap {
    position: absolute;
        top: 50%;
        left: 50%;
        margin: -50px 0 0 -50px;
    }
}
</style>
